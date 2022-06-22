import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {

  @Get("/")
  @Render('index')
  index(){
    // return {
    //   title: "Home Page - Online Store"
    // };

    let viewData = [];
    viewData['title'] = 'Home Page - Online Store';
    return{
      viewData: viewData
    };
  }

  @Get("/about")
  @Render('about')
  about(){
    // let viewData = [];
    // viewData["description"] = "This is an about page...";
    // viewData['author'] = "Developed By: AAA";
    // let data1 = 'About us - Online Store';
    // return {
    //   title: data1,
    //   subtitle: "About us",
    //   viewData: viewData
    // };

    const viewData = [];
    viewData['title'] = 'About-us Online Store';
    viewData['sibtitle'] = 'About Us';
    viewData['description'] = "This is an about page";
    viewData['author'] = 'Developed By: AAAA';
    return {
      viewData:viewData,
    };
  }
 
}
