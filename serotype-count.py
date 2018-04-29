import string

fname = input('Please enter the name of the file: ')
try:
    fhand = open(fname)
except:
    print('File cannot be opened:', fname)
    exit()

counts = dict()
for line in fhand:
    words = line.split()
    for word in words:
        if word not in counts:
            counts[word] = 1
        else:
            counts[word] += 1

print(counts)
fout = open('serotype-counts.txt', 'w')
fout.write(str(counts))

