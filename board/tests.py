from django.test import TestCase

from board.models import Jobs
# Create your tests here.
class JobsTestClass(TestCase):
    '''
    Test case for the Jobs class
    '''
    def setUp(self):
        '''
        Function that creates an instance of the Jobs class
        '''
        self.new_job = Jobs(title="Curriculum Engineer", descriptions= "creating currriculum for moringa school", requirements="moringa core graduate")

    def test_instance(self):
        '''
        Test case to check if self.new_job is an instance of jobs class
        '''

        self.assertTrue(isinstance(self.new_job, Jobs))

    # def tearDown(self):
    #     self.new_job.delete()

    def test_save_job(self):
        '''
        Test case to check if a job is saved in the database
        '''
        # self.new_job = Jobs(title="Curriculum Engineer", descriptions= "creating currriculum for moringa school", requirements="moringa core graduate")
        self.new_job.save_job()
        saved_jobs = Jobs.objects.all()
        self.assertIn(self.new_job, saved_jobs)

    def test_delete_job(self):
        '''
        Test case to check if a job is deleted from the database
        '''
        self.new_job.save_job()
        saved_jobs = Jobs.objects.all()
        self.new_job.delete_job()
        self.assertNotIn(self.new_job, saved_jobs)

    
