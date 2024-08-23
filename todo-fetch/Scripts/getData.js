 export async function getData() {
  try {
    const response = await fetch("https://d93f92d42f1ee5f0.mokky.dev/items", {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
