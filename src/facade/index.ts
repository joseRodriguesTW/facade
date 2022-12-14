class Test {
  private static instance: Test;

  private constructor() {}

  public static getInstance(): Test {
    if (!Test.instance) {
      Test.instance = new Test();
    }
    return Test.instance;
  }

  public print(): void {
    console.log('PRINTING');
  }
}

export default Test;
