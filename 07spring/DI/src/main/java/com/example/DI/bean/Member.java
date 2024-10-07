package com.example.DI.bean;

public class Member {
    private String name;
    private String nickName;
    private IPrinter printer;

    public Member(String name, String nickName, IPrinter printer) {
        this.name = name;
        this.nickName = nickName;
        this.printer = printer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNickName() {
        return nickName;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public IPrinter getPrinter() {
        return printer;
    }

    public void setPrinter(IPrinter printer) {
        this.printer = printer;
    }

    public void print() {
        printer.print("Hello, " + name + " : " + nickName);
    }
}
