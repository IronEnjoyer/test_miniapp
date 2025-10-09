export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://testminiapp-git-main-ironenjoyers-projects.vercel.app';
  
  return Response.json({
{
  "accountAssociation": {
    "header": "eyJmaWQiOjg1MDgyOCwidHlwZSI6ImF1dGgiLCJrZXkiOiIweDZDOGEzNDEyMTk5YTAxMjc3MDU5MGFBNjJjNzQ1NDlBNUMwY2RCQTEifQ",
    "payload": "eyJkb21haW4iOiJ0ZXN0bWluaWFwcC10d28udmVyY2VsLmFwcCJ9",
    "signature": "X6nXZxmJ90OJUBjkrFfcPolwEnRg8GRa5StHckZvd39Q3YpSgqmqvs7rHe7N+KtgIc8CtH2vmeuduZZLqvL5hhs="
  },
    frame: {
      version: '1',
      name: 'My Test App',
      homeUrl: URL,
      iconUrl: `${URL}/icon.png`,
      splashImageUrl: `${URL}/splash.png`,
      splashBackgroundColor: '#000000',
      primaryCategory: 'social',
      tags: ['test', 'miniapp']
    }
  });
}
