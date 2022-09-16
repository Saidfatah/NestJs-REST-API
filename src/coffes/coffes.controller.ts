import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

@Controller('coffes')
export class CoffesController {
  @Get()
  findAll() {
    // response.status(200).send(JSON.stringify(['espresso', 'latte']));
    return ['espresso', 'latte'];
  }
  @Get('flavors')
  findAllFlavors() {
    return ['choclate', 'vannila'];
  }
  //   @Get(':id')
  //   findOne(@Param() params) {
  //     return params.id;
  //   }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return 'id' + id;
  }

  //@HttpCode(HttpStatus.GONE)
  @Post()
  brewCoffe(@Body("type") type:string) {
    console.log(type);
    return type;
  }
}
