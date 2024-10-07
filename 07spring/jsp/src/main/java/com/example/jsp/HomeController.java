package com.example.jsp;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HomeController {

    @GetMapping("/hello")
    public String home(Model model) {
        ModelAndView mv = new ModelAndView("home");
        model.addAttribute("title", "Home");

        List<String> list = new ArrayList<String>();
        list.add("Hello World-1");
        list.add("Hello World-2");
        list.add("Hello World-3");

        mv.addObject("list", list);

        return "home";
    }
}
