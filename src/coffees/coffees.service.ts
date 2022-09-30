import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffesService {
  constructor(
    @InjectRepository(Coffee)
    private readonly coffeeRepository: Repository<Coffee>,
  ) {}
  findAll() {
    return this.coffeeRepository.find();
  }
  findAllFlavors() {
    // return this.coffees.reduce((a, c) => [...a, c.flavors], []);
    return [];
  }

  async findOne(id: string) {
    const coffee = await this.coffeeRepository.findOne({ where: { id: +id } });
    if (!coffee) throw new NotFoundException(`coffee ${id} not found `);

    return coffee;
  }

  create(createCoffeeDto: CreateCoffeeDto) {
    const coffee = this.coffeeRepository.create(createCoffeeDto);
    return this.coffeeRepository.save(coffee);
  }

  async update(id: string, updateCoffeeDto: Partial<Coffee>) {
    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    });
    if (!coffee) throw new NotFoundException(`coffee ${id} not found `);

    return this.coffeeRepository.save(coffee);
  }
  async updateField(id: string, updateCoffeeDto: Partial<Coffee>) {
    const coffee = await this.coffeeRepository.preload({
      id: +id,
      ...updateCoffeeDto,
    });
    if (!coffee) throw new NotFoundException(`coffee ${id} not found `);
    return this.coffeeRepository.save(coffee);
  }

  async remove(id: string) {
    const coffee = await this.findOne(id);
    this.coffeeRepository.remove(coffee);
  }
}
