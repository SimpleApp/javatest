from tempfile import mkstemp
from shutil import move , copy2
from os import remove, close, makedirs
import os
import sys

def replace_in_file(file_path, pattern, subst):
    #Create temp file
    fh, abs_path = mkstemp()
    new_file = open(abs_path,'w')
    old_file = open(file_path)
    for line in old_file:
        new_file.write(line.replace(pattern, subst))
    #close temp file
    new_file.close()
    close(fh)
    old_file.close()
    #Remove original file
    remove(file_path)
    #Move new file
    move(abs_path, file_path)

def create_job(job_name,epreuve, git_url, conf_file_path, jenkins_jobs_dir):
    target_dir = os.path.join(jenkins_jobs_dir, job_name)
    print 'target dir :',target_dir
    makedirs(target_dir)
    target_config_path = os.path.join(target_dir, 'config.xml')
    copy2(conf_file_path, target_config_path)
    replace_in_file(target_config_path, 'githuburl', git_url)
    replace_in_file(target_config_path, 'gitbranch', epreuve)



def main(argv):
    epreuve = argv[0]
    git_list_file = argv[1]
    conf_file_path = argv[2]
    jenkins_jobs_dir = argv[3]
    print "jenkins_jobs_dir ",jenkins_jobs_dir
    with open(git_list_file, 'r') as f:
        for l in f:
            if len(l) > 0:
                name , git_url = l.split(' ')
                git_url = git_url.replace('\n', '').replace('\r', '')
                create_job(name, epreuve, git_url, conf_file_path, jenkins_jobs_dir)


if __name__ == "__main__":
    print "usage :  python build_jobs.py epreuve gitlist.txt config.xml /Users/benjamingarrigues/.jenkins/jobs/"
    main(sys.argv[1:])