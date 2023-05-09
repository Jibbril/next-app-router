interface Props {

}

// Enables control of various aspects of the page's dynamic behavior.
export const dynamic = 'auto'

// Sets the revalidation time for this page. Overwritten if set in fetch. 
export const revalidate = 30;

export default async function ComponentName({}: Props) {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
        cache: "no-store", // Influence caching behavior
        next: { revalidate: 13 }, // Revalidate after 13 seconds 
    }).then(
        (response) => response.json()
    );
  return (
    <div>
      
    </div>
  );
}