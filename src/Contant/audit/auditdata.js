const Auditdata = () => {
  return (
    <>
      <tr>
        <td className="data">start</td>
        <td className="data">User2</td>
        <td className="data"></td>
        <td className="data">23 Jul 2022 11:01</td>
        <td className="data">26 Jul 2022 11:01</td>
        <td className="data">Initiate request</td>
      </tr>
      <tr>
        <td className="data" rowSpan={3}>
          Brife Upload
        </td>
        <td className="data">User2</td>
        <td className="data">2</td>
        <td className="data">23 Jul 2022 11:01</td>
        <td className="data">26 Jul 2022 11:01</td>
        <td className="data">Brife Upload</td>
      </tr>
      <tr>
        <td className="data">upload- Brife-0.1</td>
        <td className="data" colSpan={2}>
          Brife-file.docx
        </td>

        <td className="data">user2</td>
        <td className="data">23 Jul 2022 11:01</td>
      </tr>
      <tr>
        <td className="data">Change data-Duration</td>
        <td className="data" colSpan={2}>
          old 2 days-now:3days
        </td>

        <td className="data">user3</td>
        <td className="data">23 Jul 2022 11:01</td>
      </tr>
      <tr>
        <td className="data" rowSpan={2}>
          Artwork Upload
        </td>
        <td className="data">User2</td>
        <td className="data">2</td>
        <td className="data">23 Jul 2022 11:01</td>
        <td className="data">26 Jul 2022 11:01</td>
        <td className="data">Artwork Upload</td>
      </tr>
      <tr>
        <td className="data">upload- Artwork-0.1</td>
        <td className="data" colSpan={2}>
          Mannage-Red-V1.pdf
        </td>

        <td className="data">user3</td>
        <td className="data">23 Jul 2022 11:01</td>
      </tr>
      <tr>
        <td className="data">Artwork Approval</td>
        <td className="data">User2</td>
        <td className="data">5</td>
        <td className="data">23 Jul 2022 11:01</td>
        <td className="data">26 Jul 2022 11:01</td>
        <td className="data">Artwork Approved</td>
      </tr>
    </>
  );
};
export default Auditdata;
