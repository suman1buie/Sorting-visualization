from django.shortcuts import render

def start(request):
	return render(request,'index.html',{})

def BubbleSort(request):
	return render(request,'all.html',{'sort':'bubble.js','name':'Bubble Sort'})

def SelectionSort(request):
	return render(request,'all.html',{'sort':'selection.js','name':'Selection Sort'})

def InsertionSort(request):
	return render(request,'all.html',{'sort':'insertion.js','name':'Insertion Sort'})

def QuickSort(request):
	return render(request,'all.html',{'sort':'quick.js','name':'Quick Sort'})
