## multi-data

Create multipart form data

### Example 1

```typescript
import MultiData from "multi-data";

const formData = new MultiData("boundary-1234-abcd");
formData.append("data1", JSON.stringify({ data1: true }), {
  headers: { "Content-ID": 1 },
});
formData.append("data2", JSON.stringify({ data2: true }), {
  headers: { "Content-ID": 2 },
});

const res = await fetch("https://somewhere.com/batch", {
  method: "POST",
  headers: {
    "Content-Type": `multipart/mixed; boundary=${formData.boundary}`,
  },
  data: formData.toString(),
});
```

### Documentation

[API Docs](https://kmalakoff.github.io/multi-data/)
