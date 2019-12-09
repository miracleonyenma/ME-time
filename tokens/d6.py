#python d6 algorithm

def d6_algo(main):
	try:
		if (main >= 1):
			ans = main + main
			print(main + main)
			while True:
				ans = ans + ans
				from time import sleep
				sleep(0.5)
				print(ans)
	except:
		pass