function expected(testName, expected, comparison) {
  return { testName, equal: comparison === expected };
}

function test(tests) {
  tests.forEach((test) => {
    const { testName, equal } = test;
    if (equal) {
      console.log(testName + "🥳");
    } else {
      console.log(testName + "😡");
    }
  });

  const testPassed =
    (tests.filter(({ equal }) => equal).length * 100) / tests.length;

  if (testPassed === 0) {
    console.log(`There are ${testPassed}% 🤒`);
  } else if (testPassed <= 10) {
    console.log(`There are ${testPassed}% 😑`);
  } else if (testPassed <= 20) {
    console.log(`There are ${testPassed}% 🤨`);
  } else if (testPassed <= 30) {
    console.log(`There are ${testPassed}% 😐`);
  } else if (testPassed <= 40) {
    console.log(`There are ${testPassed}% 🙄`);
  } else if (testPassed <= 50) {
    console.log(`There are ${testPassed}% 😯`);
  } else if (testPassed <= 60) {
    console.log(`There are ${testPassed}% 🥲`);
  } else if (testPassed <= 70) {
    console.log(`There are ${testPassed}% 😉`);
  } else if (testPassed <= 80) {
    console.log(`There are ${testPassed}% 😋`);
  } else if (testPassed <= 90) {
    console.log(`There are ${testPassed}% 😁`);
  } else if (testPassed <= 99) {
    console.log(`There are ${testPassed}% 🤩`);
  } else {
    console.log(`All tests passed 🤩🤩🤩`);
  }
}

export { test, expected };
