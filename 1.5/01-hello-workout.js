console.log('process.argv', process.argv);
const args = process.argv.slice(2);
console.log('args', args);

const name = args[0];
debugger;
const availableIntensities = ['low', 'medium', 'high'];
const intensity = availableIntensities.indexOf(args[1]) > -1 ? args[1] : 'low';

process.stdout.write(`Hello ${name}\n`);
process.stdout.write(`You chose ${intensity} intensity workout\n`);
process.stdout.write('\nBellow are your exercises:\n');

function exercise(name, intensity) {
  let min = 1;
  let max = 5;

  switch (intensity) {
    case 'medium':
      min = 10;
      max = 25;
      break;
    case 'high':
      min = 50;
      max = 100;
      break;
  }

  const reps = Math.floor(Math.random() * (max - min) + min);
  process.stdout.write(`${name} ${reps}\n`);
}

exercise('Push-ups:', intensity);
exercise('Pull-ups:', intensity);
exercise('Squats:', intensity);
exercise('Plank:', intensity);
