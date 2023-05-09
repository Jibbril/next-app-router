export class AuthRequiredError extends Error {
  constructor(message: string = 'Authentication required' ) {
    super(message);
    this.name = ''
  }
}