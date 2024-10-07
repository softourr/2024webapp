package com.example.DI.bean;

public class PrinterB implements IPrinter {

    @Override
    public void print(String message) {
        System.out.println("Printer B : " + message);
    }
}
