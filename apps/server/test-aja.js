/**
 * Testing about callback
 */

async function callBack() {
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log('Helo');
      resolve();
    }, 1000);
  });

  console.log('World');
}

callBack();
