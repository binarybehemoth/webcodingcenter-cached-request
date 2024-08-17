export default async function Home() {
  async function fetch_visits() {
    return (
      await (
        await fetch(
          'https://webcodingcenternextjs9lrayfq-mqjz--3000--60a75bde.local-credentialless.webcontainer.io/data',
          { cache: 'force-cache' }
        )
      ).json()
    ).visits;
  }
  return (
    <>
      <p>Count: {await fetch_visits()}</p>
      <p>Count: {await fetch_visits()}</p>
      <p>Count: {await fetch_visits()}</p>
    </>
  );
}
