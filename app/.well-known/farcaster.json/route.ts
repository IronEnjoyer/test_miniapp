export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://testminiapp-git-main-ironenjoyers-projects.vercel.app';

  return Response.json({
    accountAssociation: {
      header: "",
      payload: "",
      signature: ""
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
