export function calcularMedia(notas) {
    const notaTotal = notas.reduce((acc, n) => acc + n.nota, 0)
    return notaTotal > 0 ? notaTotal / notas.length : 0
}