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

@Controller('coffes')
export class CoffesController {
  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return (
      'this send reosurces from ' +
      offset +
      ' to ' +
      (parseInt(offset) + parseInt(limit))
    );
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
  brew(@Body('type') type: string) {
    console.log(type);
    return type;
  }

  //PATCH is a method of modifying resources where the client
  //sends partial data that is to be updated without modifying the entire data.
  @Patch(':id')
  updateFlavor(@Param('id') id: string, @Body() body) {
    console.log({ id });
    console.log(body);
    return 'this partially updates the resource: ' + id;
  }

  //PUT is a method of modifying resources where the client
  //sends data that updates the entire resource
  //PUT is similar to POST in that it can create resources,
  //but it does so when there is a defined URL wherein PUT
  //replaces the entire resource if it exists or creates new if it does not exist.
  @Put(':id')
  updateFlavorPut(@Param('id') id: string, @Body() body) {
    return 'this updates the whole resource at :' + id;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return 'this deletes resource :' + id;
  }
}
