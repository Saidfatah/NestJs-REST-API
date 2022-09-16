import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffes')
export class CoffesController {
  @Get()
  findAll() {
    return ['espresso', 'latte'];
  }
  @Get('flavors')
  findAllFlavors() {
    return ['choclate', 'vannila'];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'id' + id;
  }

  @Post()
  brewCoffe(@Body('type') type: string) {
    console.log(type);
    return type;
  }
}
