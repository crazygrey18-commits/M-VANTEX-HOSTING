import {NextRequest,NextResponse} from 'next/server';
import {plans} from '../../../lib/plans';
export async function POST(req:NextRequest){
 const fail=(message:string,status=400)=>NextResponse.json({error:message},{status});
 const key=process.env.STRIPE_SECRET_KEY;
 if(!key?.startsWith('sk_test_')) return fail('Sandbox Stripe key is required.',503);
 const origin=process.env.VANTEX_SITE_URL || 'https://vantex-smoky.vercel.app';
 if(req.headers.get('origin')!==origin) return fail('Invalid request origin.',403);
 try{
 const {plan}=await req.json();
 if(typeof plan!=='string'||!Object.prototype.hasOwnProperty.call(plans,plan))return fail('Unknown plan.');
 const [amount,id]=plans[plan as keyof typeof plans];
 const headers={Authorization:`Bearer ${key}`,'Content-Type':'application/x-www-form-urlencoded'};
 const check=await fetch(`https://api.stripe.com/v1/prices/${id}?expand%5B%5D=product`,{headers,cache:'no-store'});
 const price=await check.json();
 if(!check.ok || price.livemode!==false || !price.active || price.unit_amount!==amount || price.currency!=='usd'||price.recurring?.interval!=='month'||price.recurring?.interval_count!==1||!price.product?.active||!String(price.product?.name).toLowerCase().split(/\s+/).includes(plan.toLowerCase()))return fail('Stripe package verification failed. Check the product name and monthly Price ID.',503);
 const body=new URLSearchParams({mode:'subscription','line_items[0][price]':id,'line_items[0][quantity]':'1',success_url:`${origin}/checkout-result?status=returned`,cancel_url:`${origin}/fivem`, 'metadata[plan]':plan});
 const res=await fetch('https://api.stripe.com/v1/checkout/sessions',{method:'POST',headers,body});
 const session=await res.json();
 if(!res.ok||session.livemode!==false||typeof session.url!=='string'||!session.url.startsWith('https://checkout.stripe.com/'))return fail('Could not create sandbox checkout.',502);
 return NextResponse.json({url:session.url});
 }catch{return fail('Checkout unavailable. Try again later.',502);}
}
