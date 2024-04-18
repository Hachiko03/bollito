const { SlashCommandBuilder } = require("discord.js");
const dataDeLaLista = require("./dataLT/ltData");
const lista = dataDeLaLista.map(
  (tarea) => (tarea.checked ? "☑️" : "⬜") + " " + tarea.text
);

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lt")
    .setDescription("Envia un mensaje por cada elemento de la lista de cosas por hacer de H&B"),
  async execute(interaction) {
    await interaction.reply(
      /* lista.forEach((tarea)=>({ content: tarea, ephemeral: false})) */
      { content: lista.join("\n\n"), ephemeral: false }
    );
  },
};
