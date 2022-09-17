import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }
  findAllFlavors() {
    return this.coffees.reduce((a, c) => [...a, c.flavors], []);
  }

  findOne(id: string) {
    throw "random error" // this returns inetrnal server error 
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) throw new NotFoundException(`coffee ${id} not found `);

    return coffee;
  }

  create(createCoffeeDto: any) {
    const newCoffe: Coffee = {
      brand: createCoffeeDto.brand,
      name: createCoffeeDto.name,
      flavors: createCoffeeDto.flavors,
      id: this.coffees.length + 1,
    };
    this.coffees.push(newCoffe);
  }

  update(id: string, updateCoffeeDto: Partial<Coffee>) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      const index = this.coffees.indexOf(existingCoffee);
      console.log({ index });
      this.coffees[index] = { ...updateCoffeeDto };
    }
  }
  updateField(id: string, updateCoffeeDto: Partial<Coffee>) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      const index = this.coffees.indexOf(existingCoffee);
      console.log({ index });
      this.coffees[index] = { ...this.coffees[index], ...updateCoffeeDto };
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
