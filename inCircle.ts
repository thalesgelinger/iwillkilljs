
const inCircle = ({ latitude, longitude }: { latitude: number, longitude: number }) => {
    const { pow, sqrt } = Math;

    const center = {
        x: 10,
        y: 10,
    }

    const radius = 2;

    const squareDist = sqrt(pow(latitude - center.x, 2)) + sqrt(pow(longitude - center.y, 2));
    return pow(radius, 2) >= squareDist;
}

console.log(inCircle({ latitude: 10, longitude: 10 }))
