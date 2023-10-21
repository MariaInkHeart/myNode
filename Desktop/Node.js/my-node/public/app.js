document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;
    remove(id).then(() => {
      event.target.closest("li").remove();
    });
  } else if (event.target.dataset.type === "edit") {
    const id = event.target.dataset.id;
    const newName = prompt("Введите новое название");
    edit(id, newName).then(() => {
      console.log("true");
    });
  }
});

async function remove(id) {
  await fetch(`/${id}`, {
    method: "DELETE",
  });
}

async function edit(id, newName) {
  await fetch(`/${id}`, {
    method: "PUT",
    title: JSON.stringify(newName),
    id,
  });
}
