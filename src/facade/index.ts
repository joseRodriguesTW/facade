class Test {
  private static instance: Test;
  private APP_NAME: string;

  private constructor(APP_NAME: string) {
    this.APP_NAME = APP_NAME;
  }

  public static getInstance(APP_NAME: string): Test {
    if (!Test.instance) {
      Test.instance = new Test(APP_NAME);
    }
    return Test.instance;
  }

  public print(): void {
    console.log(this.APP_NAME);
  }
}

export default Test;
