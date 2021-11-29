export const tempoParaSegundos = (tempo: string): number => {
  const [horas = "0", minutos = "0", segundo = "0"] = tempo.split(":");

  const horaEmSegundos = Number(horas) * 3600;
  const minutosEmSegundo = Number(minutos) * 60;

  return horaEmSegundos + minutosEmSegundo + Number(segundo);
};
