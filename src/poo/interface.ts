interface Driver {
  database: string
  password: string
  port: number

  connect(): string
  disconnected(): void  // Es la forma correcta de definir un metodo
}

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ){}
  
  disconnected(): void {
    throw new Error("Method not implemented.")
  }

  connect(): string {
    return 'hi'
  }
}