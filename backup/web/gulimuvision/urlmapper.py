#!/usr/bin/python
# filename: 	urlmapper.py
# author: 	gulimujyujyu
# web: 		http://gulimujyujyu.me

import hashlib
import sys
from datetime import datetime

timeFormat = "%d-%m-%Y %H:%M:%S"
usageStr = '''
===================
urlmapping.py Usage:
urlmapper.py encode_text test_flag output_file
-----------------------------------------------
encode_text: what you want to encrypt
test_falg: 1-save; 0-do not save
output_file(optional)

output(default): mapping.txt mapping_backup.txt
===============================================
'''
if len(sys.argv) < 3 or len(sys.argv) > 4:
  print usageStr
  exit()

#encrypt
enstr = sys.argv[1];
flag = sys.argv[2];

#start
print '======================================='
print 'Encrypting "%s"' % enstr
en = hashlib.md5()
en.update(enstr)
print 'Encrytion done. "%s" into "%s"' % (enstr, en.hexdigest())

if flag is '1':
  now = datetime.now();
  output_line = '%s||%s||%s\n' % (enstr, en.hexdigest(), now.strftime(timeFormat))
  print output_line
  if len(sys.argv) == 4:
    filename = sys.argv[3]
    print 'saving to %s'% filename
    f = file(filename,'w')
    f.write(output_line)
    f.close()
  else:
    print 'saving to "mapping.txt"'
    #backup
    try:
      f_back = file("mapping_backup.txt",'w')
      f = file("mapping.txt",'r')
      while True:
        ln = f.readline()
        if len(ln) == 0:
          break;
        f_back.write(ln)
      f_back.close()
      f.close()
    except IOError as detail:
      print '\topen mapping.txt for backing up failed'
      print 'I/O error:', detail
    finally:
      #appending
      f = file("mapping.txt",'a')
      f.write(output_line)
      f.close()
      print 'done'
print '======================================='
#end
