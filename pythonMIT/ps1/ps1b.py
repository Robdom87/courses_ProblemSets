# Part B: Saving, with a raise Background 

# In Part A, we unrealistically assumed that your salary didn’t change. But you are an MIT graduate, and clearly you are going to be worth more to your company over time! So we are going to build on your solution to Part A by factoring in a raise every six months. 

# In ps1b.py , copy your solution to Part A (as we are going to reuse much of that machinery). Modify your program to include the following 

def months_to_save():
    """
    Returns how many months it will take you to save up enough money for a down payment 
    by calculating from the users annual salary, portion to be saved, cost of home, and semi annual raise.
    """
    months = 0.0
    annual_salary = float(input("Enter your annual salary: "))
    portion_saved = float(input("Enter the percent of your salary to save, as a decimal: "))

    #1.Call the cost of your dream home total_cost .
    total_cost = float(input("Enter the cost of your dream home: "))

    semi_annual_raise = float(input("Enter the semiannual raise, as a decimal: "))
 
    #2.Call the portion of the cost needed for a down payment portion_down_payment . For simplicity, assume that portion_down_payment = 0.25 (25%). 
    portion_down_payment = 0.25

    #3.Call the amount that you have saved thus far current_savings . You start with a current savings of $0. 
    current_savings = 0.0
    #4.Assume that you invest your current savings wisely, with an annual return of r (in other words, at the end of each month, you receive an additional current_savings*r/12 funds to put into your savings – the 12 is because r is an annual rate). Assume that your investments earn a return of r = 0.04 (4%). 
    r = 0.04
    #5.Assume your annual salary is annual_salary . 
    #6.Assume you are going to dedicate a certain amount of your salary each month to saving for the down payment. Call that portion_saved . This variable should be in decimal form (i.e. 0.1 for 10%). 
    down_payment = total_cost * portion_down_payment

    #7.At the end of each month, your savings will be increased by the return on your investment, plus a percentage of your monthly salary (annual salary / 12).
    while current_savings < down_payment: 
        months += 1
        current_savings += current_savings*r/12
        current_savings += (annual_salary/12) * portion_saved 
        # 2.After the 6 th month, increase your salary by that percentage. Do the same after the 12th th month, the 18 month, and so on.
        if months % 6 == 0:
            annual_salary = annual_salary + (annual_salary* semi_annual_raise)


    print("Number of months: ",months)
    return months

months_to_save()


# Hints To help you get started, here is a rough outline of the stages you should probably follow in writing your code: 
# ●Retrieve user input. 
# ●Initialize some state variables. You should decide what information you need. Be sure to be careful about values that represent annual amounts and those that represent monthly amounts. 
# ●Be careful about when you increase your salary – this should only happen after the 6 th , 12th , 18th month, and so on. Try different inputs and see how quickly or slowly you can save enough for a down payment. Please make your program print results in the format shown in the test cases below. 

# Test Case 1 >>> 
# Enter your starting annual salary: 120000 
# Enter the percent of your salary to save, as a decimal: . 05 
# Enter the cost of your dream home: 500000 
# Enter the semiannual raise, as a decimal: .03 
# Number of months: 142 >>> 

# Test Case 2 >>> 
# Enter your starting annual salary: 80000 
# Enter the percent of your salary to save, as a decimal: . 1 
# Enter the cost of your dream home: 800000 
# Enter the semiannual raise, as a decimal: .03 
# Number of months: 159 >>> 

# Test Case 3 >>> 
# Enter your starting annual salary: 75000 
# Enter the percent of your salary to save, as a decimal: . 05 
# Enter the cost of your dream home: 1500000 
# Enter the semiannual raise, as a decimal: .05 
# Number of months: 261 >>>