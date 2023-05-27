import dns from "node:dns/promises";

const lookup = await dns.lookup("saichiopy");
const google = await dns.lookup("www.google.com");
const server = await dns.getServers();
const lookupService = await dns.lookupService(google.address, 22);

console.table(lookup);
console.table(google);
console.table(server);
console.table(lookupService);
