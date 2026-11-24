# M VANTEX HOSTING — Phase 1
Pre-launch public website. Requires Node.js 20.9+ (prefer a supported LTS) and npm.

1. Extract ZIP. Open a terminal in the mvantex folder.
2. Run `npm install`.
3. Run `npm run dev` and open http://localhost:3000.
4. For production compilation run `npm run build`, then `npm start`.
5. Run `npm run typecheck` after Next.js generates its type files.

Edit app/globals.css for styling, components/Plans.tsx for provisional products, app/page.tsx for homepage, app/[page]/page.tsx for public information pages. No secrets required. This phase does not implement authentication, payments, email, provisioning, databases, or ticket submission. Purchase buttons are intentionally disabled. Legal pages are draft notices, not launch-ready policies. No live infrastructure claims or fake reviews. Uses local CSS artwork and system fonts; no external image or font requests. The annual 15% discount and Titan specifications are proposed placeholders. Dependencies have not been installed or execution-tested in the creation environment. Generate and retain package-lock.json, audit dependencies and test before deployment.

Next phases: PostgreSQL and secure auth with verified email; customer/admin authorization and audit logs; Stripe signed idempotent webhooks and customer portal; transactional email; durable provisioning queue and Pterodactyl Application API; per-customer server-scoped authorization and secure Cfx.re key handling; integration and security tests. VPS requires a separate virtualization backend, not Pterodactyl alone.

## Version 2
Original local vector illustrations (metallic logo, racks, processor and shield), feature icons, product cards and an explicitly disconnected control panel preview. No external image services needed. No accounts, payments, or infrastructure connected. Install Node.js 22 LTS, run `npm install`, then `npm run dev`. Check with `npm run typecheck` and `npm run build` before deployment.
