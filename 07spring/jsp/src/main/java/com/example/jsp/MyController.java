package com.example.jsp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class MyController {

    @Autowired
    ISimpleBbsDao dao;

    @RequestMapping("/")
    public String root() {
        return "redirect:list";
    }

    @RequestMapping("/list")
    public String listPage(Model model) {
        model.addAttribute("lists", dao.listDao());
        model.addAttribute("count", dao.countDao());
        return "list";
    }
}
