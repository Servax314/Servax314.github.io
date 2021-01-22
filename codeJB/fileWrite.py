#!/usr/bin/python


a_file = open("code.txt")
o_file = open("fCode.txt","w")


lines = a_file.readlines()

for line in lines:

    o_file.write("<li>"+line.rstrip()+"</li>"+"\n")