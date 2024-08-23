export async function changeItem(id, e) {
  const newValue = e.target.value;
  try {
    await fetch(`https://d93f92d42f1ee5f0.mokky.dev/items/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        element: newValue,
      }),
    });
  } catch (error) {
    console.error(error);
  }
}
