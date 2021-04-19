class jed_set:
    entries = []
    size = 0

    def __init__(self, args):
        for x in args:
            self.add(x)

    @classmethod
    def add(cls, item):
        absent = True
        for x in cls.entries:
            if x == item:
                absent = False
        if absent:
            self.entries.append(item)
            self.size += 1

    def remove(self, item):
        new_set = []
        new_index = 0
        old_index = 0
        while old_index < self.size:
            if self.entries[old_index] != item:
                new_set.append(self.entries[old_index])
                new_index += 1
                old_index += 1
            else:
                old_index += 1
        self.entries = new_set
        self.size -= 1

    def contains(self, item):
        verdict = False
        for x in self.entries:
            if x == item:
                verdict = True
        return verdict

    def clear(self):
        self.entries


import unittest

    #-----------------testing set initialization---------------------------


class ListCase(unittest.TestCase):
    def test_string(self):
        test = jed_set([1,2,3])
        test.entries = []
        del test
        self.assertEqual(jed_set('string').entries, ['s', 't', 'r', 'i', 'n', 'g'])
        print('test: ', test)
    # def test_string(self):
    #     self.assertEqual(jed_set('string').entries, ['s', 't', 'r', 'i', 'n', 'g'])
    # def test_list(self):
    #     self.assertEqual(jed_set(['one', 'two', 'three']).entries, ['one', 'two', 'three'])
    # def test_tuple(self):
    #     self.assertEqual(jed_set(('one', 'two', 'three')).entries, ['one', 'two', 'three'])
    # def test_list_special(self):
    #     self.assertEqual(jed_set([True, False, None]).entries, [True, False, None])
    # def test_list_int(self):
    #     self.assertEqual(jed_set([1, 2, 3]).entries, [1, 2, 3])
    # def test_list_list(self):
    #     self.assertEqual(jed_set([[1], [2], [3]]).entries, [[1], [2], [3]])
    # def test_list_dict(self):
    #     self.assertEqual(jed_set([{'one': 1}, {'two': 2}, {'three': 3}]).entries, [{'one': 1}, {'two': 2}, {'three': 3}])

    #------------------testing set functionality-------------------------
# class MethodCases(unittest.TestCase):
#     def test_methods(self):
#         test = jed_set(['one', 'two', 'three'])

#         test.add('four')
#         self.assertEqual(test.entries, ['one', 'two', 'three', 'four'])

#         test.remove('four')
#         self.assertEqual(test.entries, ['one', 'two', 'three'])

#         self.assertEqual(test.contains('one'), True)
#         self.assertEqual(test.contains('five'), False)

if __name__ == '__main__':
    unittest.main()
