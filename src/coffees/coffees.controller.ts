import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CoffesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdatePatchCoffeeDto } from './dto/update-patch-coffee.dto';

@Controller('coffes')
export class CoffesController {
  constructor(private readonly coffseService: CoffesService) {}

  @Get()
  findAll() {
    return this.coffseService.findAll();
  }
  @Get('flavors')
  findAllFlavors() {
    return this.coffseService.findAllFlavors();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffseService.findOne(id);
  }

  @Post()
  create(@Body() createCoffeDto: CreateCoffeeDto) {
    const { brand, name, flavors, id } = createCoffeDto;
    return this.coffseService.create({ brand, name, flavors, id });
  }

  //PATCH is a method of modifying resources where the client
  //sends partial data that is to be updated without modifying the entire data.
  @Patch(':id')
  updateFlavor(
    @Param('id') id: string,
    @Body() updateCoffePatchDto: UpdatePatchCoffeeDto,
  ) {
    this.coffseService.updateField(id, updateCoffePatchDto);
    return 'this partially updates the resource: ' + id;
  }

  //PUT is a method of modifying resources where the client
  //sends data that updates the entire resource
  //PUT is similar to POST in that it can create resources,
  //but it does so when there is a defined URL wherein PUT
  //replaces the entire resource if it exists or creates new if it does not exist.
  @Put(':id')
  updateFlavorPut(@Param('id') id: string, @Body() body) {
    this.coffseService.update(id, body);
    return 'this updates the whole resource at :' + id;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.coffseService.remove(id);
    return 'this deletes resource :' + id;
  }
}
