export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://testminiapp-git-main-ironenjoyers-projects.vercel.app';

  return Response.json({
  "accountAssociation": {
    "header": "eyJmaWQiOi0xLCJ0eXBlIjoiYXV0aCIsImtleSI6IjB4OTBmODdlYjRERjYxZjE0NjkzYjRCNUNiRTMxNzMzMDFDOTFEYkYwNSJ9",
    "payload": "eyJkb21haW4iOiJ0ZXN0bWluaWFwcC10d28udmVyY2VsLmFwcCJ9",
    "signature": "MHg5MGI1YzA0Zjc3MGY1M2I4M2I3OGQzOTMwNTNjMmJjZjUwNmE3ZThjNDViYmEwNDk2OTcwZTM1ZTQ0YzU2MGU1Nzc4Y2Y1ZTJkNDY2YzE1MWQxNGMzYmFjNzM3ZDcxZGEwZDVjYWJmMGMzZTdhYTc2YzRjMmQ5MmE5NDJhYjkyODFj"
},
    miniapp: {
      version: '1',
      name: 'My Test App',
      homeUrl: URL,
      iconUrl: `${URL}/icon.png`,
      splashImageUrl: `${URL}/splash.png`,
      splashBackgroundColor: '#000000',
      primaryCategory: 'social',
      tags: ['test', 'miniapp'],
      // Add other required fields as needed (see docs)
    }
  });
}
