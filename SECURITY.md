# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.0.x   | ✅ Yes     |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, send details privately to:  
📧 `luvubeautyacademy@gmail.com`  
📱 WhatsApp: [+91 94879 92728](https://wa.me/919487992728)

Please include:
- Type of issue (e.g. XSS, open redirect, data exposure)
- Full paths of source files related to the issue
- Any special configuration required to reproduce
- Step-by-step instructions to reproduce
- Proof-of-concept or exploit code (if possible)
- Impact and potential attack scenario

We will acknowledge receipt within **48 hours** and aim to provide a fix within **7 days** for critical issues.

## Security Best Practices in This Project

- All user-facing links use `rel="noopener noreferrer"`
- No sensitive data stored client-side
- Environment variables used for all API keys (never committed)
- Next.js Image component used for all images (prevents hotlinking abuse)
- CSP headers configured in `next.config.ts`
