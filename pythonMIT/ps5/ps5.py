# 6.0001/6.00 Problem Set 5 - RSS Feed Filter
# Name:
# Collaborators:
# Time:

import feedparser
import string
import time
import threading
from project_util import translate_html
from mtTkinter import *
from datetime import datetime
import pytz


#-----------------------------------------------------------------------

#======================
# Code for retrieving and parsing
# Google and Yahoo News feeds
# Do not change this code
#======================

def process(url):
    """
    Fetches news items from the rss url and parses them.
    Returns a list of NewsStory-s.
    """
    feed = feedparser.parse(url)
    entries = feed.entries
    ret = []

    for entry in entries:
        guid = entry.guid
        title = translate_html(entry.title)
        link = entry.link
        if url != "http://news.google.com/news?output=rss":
            description = translate_html(entry.title_detail.value)
        else:
            description = translate_html(entry.description)
        pubdate = translate_html(entry.published)

        try:
            pubdate = datetime.strptime(pubdate, "%a, %d %b %Y %H:%M:%S %Z")
            pubdate.replace(tzinfo=pytz.timezone("GMT"))
          #  pubdate = pubdate.astimezone(pytz.timezone('EST'))
          #  pubdate.replace(tzinfo=None)
        except ValueError:
            pubdate = datetime.strptime(pubdate, "%a, %d %b %Y %H:%M:%S %z")

        newsStory = NewsStory(guid, title, description, link, pubdate)
        ret.append(newsStory)
    return ret

#======================
# Data structure design
#======================

# Problem 1

# TODO: NewsStory
class NewsStory(object):
    def __init__(self, guid, title, description, link, pubdate):
        self.guid = guid
        self.title = title
        self.description = description
        self.link = link
        self.pubdate = pubdate
    def get_guid(self):
        return self.guid
    def get_title(self):
        return self.title
    def get_description(self):
        return self.description
    def get_link(self):
        return self.link
    def get_pubdate(self):
        return self.pubdate

#======================
# Triggers
#======================

class Trigger(object):
    def evaluate(self, story):
        """
        Returns True if an alert should be generated
        for the given news item, or False otherwise.
        """
        # DO NOT CHANGE THIS!
        raise NotImplementedError

# PHRASE TRIGGERS

# Problem 2
#PhraseTrigger
class PhraseTrigger(Trigger):
    def __init__(self, phrase):
        Trigger.__init__(self)
        self.phrase = phrase
    def get_phrase(self):
        return self.phrase
    def is_phrase_in(self, text):
        """
        which takes in one string argument text. It returns True if the whole phrasephrase is present in text, False otherwise, as described in the above examples.
        """
        phr = self.get_phrase()
        # pull story
        def replacePunctLower(str):
            arr = []
            arr[:] = str.lower()
            punct = "!@#$%^&*()-_+={}[]|\:;'<>?,./\""
            for i, char in enumerate(arr):
                if char in punct:
                    arr[i] = " "
            return "".join(arr)
        phrPL = replacePunctLower(phr)
        # print(phr, phrPL)
        textPL = replacePunctLower(text)


            # edge case if punctuation between words and no spaces should still read as space
                #change puctuation to " "
            # seperate story and phrase into words arr

        def splitReplaceEmpty(strPL):
            strArr = strPL.split(" ")
            return list(filter(lambda x: x != "", strArr))
        phrArr =  splitReplaceEmpty(phrPL)
        textArr = splitReplaceEmpty(textPL)
        # print(text, textPL, textArr)           
            # then use for loop to go thru all words story 
        phrIdx = 0
        for t_word in textArr:
            p_word = phrArr[phrIdx]
                # check if word matches first word in phrase
            if t_word == p_word:
                # if so, increase prhase word indexto check if next word matches second word in phrase
                phrIdx += 1
                    # do until at the end of prhase array
                if phrIdx > len(phrArr)-1:
                    # if so return true
                    return True
                # if word does not match
            else:
                #   reduce index back to 0
                phrIdx = 0
                #   and check if first matches
                #   if so incease idex like above
                p_word = phrArr[phrIdx]
                if t_word == p_word:
                    phrIdx += 1

            # if match return true
            # else return false
        return False
        


# Problem 3
# TODO: TitleTrigger
class TitleTrigger(PhraseTrigger):
    def __init__(self, phrase):
        PhraseTrigger.__init__(self, phrase)
    def evaluate(self, story):
        return self.is_phrase_in(story.get_title())
        


# Problem 4
# TODO: DescriptionTrigger
class DescriptionTrigger(PhraseTrigger):
    def __init__(self, phrase):
        PhraseTrigger.__init__(self, phrase)
    def evaluate(self, story):
        return self.is_phrase_in(story.get_description())
        


# TIME TRIGGERS

# Problem 5
# TODO: TimeTrigger
class TimeTrigger(Trigger):
    def __init__(self, time):
        Trigger.__init__(self)
        self.time = datetime.strptime(time, "%d %b %Y %H:%M:%S")


# Constructor:
#        Input: Time has to be in EST and in the format of "%d %b %Y %H:%M:%S".
#        Convert time from string to a datetime before saving it as an attribute.

# Problem 6
# TODO: BeforeTrigger and AfterTrigger
class BeforeTrigger(TimeTrigger):
    def __init__(self, time):
        TimeTrigger.__init__(self, time)
    def get_time(self):
        return self.time
    def evaluate(self, story):
        trigger_time = self.get_time()
        if story.get_pubdate().tzinfo != None:
            trigger_time = trigger_time.replace(tzinfo=pytz.timezone("EST"))
        return True if story.get_pubdate() < trigger_time else False
        
class AfterTrigger(TimeTrigger):
    def __init__(self, time):
        TimeTrigger.__init__(self, time)
    def get_time(self):
        return self.time
    def evaluate(self, story):
        trigger_time = self.get_time()
        if story.get_pubdate().tzinfo != None:
            trigger_time = trigger_time.replace(tzinfo=pytz.timezone("EST"))
        return True if story.get_pubdate() > trigger_time else False



# COMPOSITE TRIGGERS

# Problem 7
# TODO: NotTrigger
class NotTrigger(Trigger):
    def __init__(self, trig):
        Trigger.__init__(self)
        self.trig = trig
    def evaluate(self, story):
        return not self.trig.evaluate(story)


# Problem 8
# TODO: AndTrigger
class AndTrigger(Trigger):
    def __init__(self, trig1, trig2):
        Trigger.__init__(self)
        self.trig1 = trig1
        self.trig2 = trig2
    def evaluate(self, story):
        return self.trig1.evaluate(story) and self.trig2.evaluate(story)

# Problem 9
# TODO: OrTrigger
class OrTrigger(Trigger):
    def __init__(self, trig1, trig2):
        Trigger.__init__(self)
        self.trig1 = trig1
        self.trig2 = trig2
    def evaluate(self, story):
        return self.trig1.evaluate(story) or self.trig2.evaluate(story)



#======================
# Filtering
#======================

# Problem 10
def filter_stories(stories, triggerlist):
    """
    Takes in a list of NewsStory instances.

    Returns: a list of only the stories for which a trigger in triggerlist fires.
    """
    # TODO: Problem 10
    # This is a placeholder
    # (we're just returning all the stories, with no filtering)
    filtered_stories = []
    for trigger in triggerlist:
        for story in stories:
            if trigger.evaluate(story) and story not in filtered_stories:
                filtered_stories.append(story)
    return filtered_stories



#======================
# User-Specified Triggers
#======================
# Problem 11
def read_trigger_config(filename):
    """
    filename: the name of a trigger configuration file

    Returns: a list of trigger objects specified by the trigger configuration
        file.
    """
    # We give you the code to read in the file and eliminate blank lines and
    # comments. You don't need to know how it works for now!
    trigger_file = open(filename, 'r')
    lines = []
    for line in trigger_file:
        line = line.rstrip()
        if not (len(line) == 0 or line.startswith('//')):
            lines.append(line)

    # TODO: Problem 11
    # line is the list of lines that you need to parse and for which you need
    # to build triggers

    print(lines) # for now, print it so you see what it contains!



SLEEPTIME = 120 #seconds -- how often we poll

def main_thread(master):
    # A sample trigger list - you might need to change the phrases to correspond
    # to what is currently in the news
    try:
        t1 = TitleTrigger("election")
        t2 = DescriptionTrigger("Trump")
        t3 = DescriptionTrigger("Clinton")
        t4 = AndTrigger(t2, t3)
        triggerlist = [t1, t4]

        # Problem 11
        # TODO: After implementing read_trigger_config, uncomment this line 
        # triggerlist = read_trigger_config('triggers.txt')
        
        # HELPER CODE - you don't need to understand this!
        # Draws the popup window that displays the filtered stories
        # Retrieves and filters the stories from the RSS feeds
        frame = Frame(master)
        frame.pack(side=BOTTOM)
        scrollbar = Scrollbar(master)
        scrollbar.pack(side=RIGHT,fill=Y)

        t = "Google & Yahoo Top News"
        title = StringVar()
        title.set(t)
        ttl = Label(master, textvariable=title, font=("Helvetica", 18))
        ttl.pack(side=TOP)
        cont = Text(master, font=("Helvetica",14), yscrollcommand=scrollbar.set)
        cont.pack(side=BOTTOM)
        cont.tag_config("title", justify='center')
        button = Button(frame, text="Exit", command=root.destroy)
        button.pack(side=BOTTOM)
        guidShown = []
        def get_cont(newstory):
            if newstory.get_guid() not in guidShown:
                cont.insert(END, newstory.get_title()+"\n", "title")
                cont.insert(END, "\n---------------------------------------------------------------\n", "title")
                cont.insert(END, newstory.get_description())
                cont.insert(END, "\n*********************************************************************\n", "title")
                guidShown.append(newstory.get_guid())

        while True:

            print("Polling . . .", end=' ')
            # Get stories from Google's Top Stories RSS news feed
            stories = process("http://news.google.com/news?output=rss")


            # # Get stories from Yahoo's Top Stories RSS news feed
            # stories.extend(process("http://news.yahoo.com/rss/topstories"))
            stories = filter_stories(stories, triggerlist)

            list(map(get_cont, stories))
            scrollbar.config(command=cont.yview)


            print("Sleeping...")
            time.sleep(SLEEPTIME)
            print("sleep?")

    except Exception as e:
        print(e)


if __name__ == '__main__':
    root = Tk()
    root.title("Some RSS parser")
    t = threading.Thread(target=main_thread, args=(root,))
    t.start()
    root.mainloop()

