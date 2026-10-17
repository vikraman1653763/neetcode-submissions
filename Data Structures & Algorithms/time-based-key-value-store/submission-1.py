class TimeMap:

    def __init__(self):
        self.keystore = {}

    def set(self, key: str, value: str, timestamp: int) -> None:
        if key in self.keystore:
            self.keystore[key].append([timestamp,value])
        else:
            self.keystore[key]=[[timestamp,value]]

    def get(self, key: str, timestamp: int) -> str:
        if key in self.keystore:
            values = self.keystore[key]

            left = 0
            right = len(values)-1
            result = ''
            while left<=right:
                
                mid = int((left+right)/2)

                if values[mid][0]<=timestamp:
                    result = values[mid][1]
                    left = mid+1
                else:
                    right = mid-1
            return result
        else:
            return ''
