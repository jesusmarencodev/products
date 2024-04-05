interface ProductProperties {
  name?: string;
  price?: number;
  description?: string;
}

export class Product {
  constructor(
    public id: String,
    public name: String,
    public price: Number,
    public description?: String,
  ) {}

  updateWith({ name, description, price }: ProductProperties) {
    this.name = name ?? this.name;
    this.description = description ?? this.description;
    this.price = price ?? this.price;
  }
}
