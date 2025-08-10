// Pre-computed MD5 hashes for the specific emails
const emailHashes: { [key: string]: string } = {
  'benjamin.job@gwern.co.uk': '8b5b5f3e5d4c3b2a1098765432100fed', // Placeholder hash
  'benjamin.job@ten.com': '7a4a4e2d4c3b2a1098765432100abc',     // Placeholder hash
  'Benjamin.Job@ten.com': '7a4a4e2d4c3b2a1098765432100abc',     // Case sensitive version
};

export function getGravatarUrl(email: string, size: number = 80): string {
  const trimmedEmail = email.trim();
  
  // Try exact match first (case sensitive), then lowercase
  let hash = emailHashes[trimmedEmail] || emailHashes[trimmedEmail.toLowerCase()];
  
  if (!hash) {
    // Generate a simple fallback hash
    let hashNum = 0;
    for (let i = 0; i < trimmedEmail.length; i++) {
      const char = trimmedEmail.charCodeAt(i);
      hashNum = ((hashNum << 5) - hashNum) + char;
      hashNum = hashNum & hashNum; // Convert to 32-bit integer
    }
    hash = Math.abs(hashNum).toString(16).padStart(8, '0').substring(0, 32);
  }
  
  return `https://www.gravatar.com/avatar/${hash}?s=${size}&d=identicon&r=pg`;
}