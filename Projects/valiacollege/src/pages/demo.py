# class myClass:
#     x = 5

# y = myClass()
# print(y.x)

# class person:
#     def __init__ (self, name, age):
#         self.name = name
#         self.age = age
    
#     def __str__ (self):
#         return f"hi {self.name}({self.age})"

# p1 = person("Jhon", "25")

# print(p1.name)
# print(p1.age)
# print(p1.age, p1.name)

# print(p1)


"""class Persone:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

x = Persone("Jhon", "Doe")
x.printname()"""

"""class Persone:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

class Student(Persone):
    pass

x = Student("Mike", "Tyson")
x.printname()"""

"""class Persone:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

class Student(Persone):
    def __init__(self, fname, lname):
        Persone.__init__(self, fname, lname)

x = Student("Mike", "Tyson")
x.printname()"""

class Persone:
    def __init__(self, fname, lname):
        self.firstname = fname
        self.lastname = lname

    def printname(self):
        print(self.firstname, self.lastname)

class Student(Persone):
    def __init__(self, fname, lname):
        super().__init__(fname, lname)
        self.graduationyear = 2019

x = Student("Mike", "Tyson")
print(x.graduationyear)

import mymodule as MD

MD.grt("Ajju")

a = MD.per1["name"]
print(a)

import camelcase
c = camelcase.CamelCase()
txt = "lorem dhananjay s galave"
print(c.hump(txt))