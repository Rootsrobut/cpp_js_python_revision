class Base:
    def __init__(self, base_val):
        self._base_value = base_val  # Protected member

    def display(self):
        print(f"Base class value: {self._base_value}")

    # Pure virtual function (enforced via raising NotImplementedError)
    def show(self):
        raise NotImplementedError("Subclasses must implement this method.")

    # Friend-like function to access Base class protected member
    @staticmethod
    def access_base_value(obj):
        print(f"Accessing Base class protected value: {obj._base_value}")


class Derived(Base):
    def __init__(self, base_val, derived_val):
        super().__init__(base_val)
        self.__derived_value = derived_val  
    def display(self):
        print(f"Derived class values: BaseValue = {self._base_value}, DerivedValue = {self.__derived_value}")

    
    def show(self):
        print("Derived class specific implementation of show().")

    # Friend-like function to access Derived class private member
    @staticmethod
    def access_derived_value(obj):
        print(f"Accessing Derived class private value: {obj.__derived_value}")


# Driver code
if __name__ == "__main__":
    obj = Derived(10, 20)

    # Virtual function demonstration
    base_ptr = obj
    base_ptr.display()  # Calls Derived's display() because Python supports dynamic dispatch

    # Pure virtual function demonstration
    obj.show()  # Derived class must implement show()

    # Friend-like function demonstration
    Base.access_base_value(obj)    # Access Base's protected member
    Derived.access_derived_value(obj)  # Access Derived's private member
