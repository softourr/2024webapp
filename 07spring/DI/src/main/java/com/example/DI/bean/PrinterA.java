package com.example.DI.bean;

public class PrinterA implements IPrinter {

    @Override
    public void print(String message) {
        System.out.println("Printer A : " + message);
    }
}
