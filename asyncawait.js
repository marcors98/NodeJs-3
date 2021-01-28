const sleep_st = (t) => new Promise((resolve, reject) => setTimeout(resolve, t));

const sleept_im = () => new Promise((resolve, reject) => setImmediate(resolve));

(
  async () => {
    // 2nd go the timeouts
    setTimeout( () => console.log(1), 0);

    // Every console.log goes first (Poll)
    console.log(2);

    await sleep_st(0);

    // 3rd the Immediates from Check
    setImmediate( () => console.log(3) );

    // Every console.log goes first (Poll)
    console.log(4);

    await sleept_im();

    // 3rd the Immediates from Check
    setImmediate( () => console.log(5) );

    // Every console.log goes first (Poll)
    console.log(6);

    await 1;

    // 3rd the Immediates from Check
    setImmediate( () => console.log(7) );

    // Every console.log goes first (Poll)
    console.log(8);
  }
)();
