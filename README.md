# VM Management Application

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/justspookje/vm.git
   cd vm
   ```

2. **Install the required dependencies**:
   ```bash
   npm install
   ```

3. **Set up the environment variables**:
   - Create a `.env` file in the root directory and set the necessary variables.

4. **Run the application**:
   ```bash
   npm start
   ```

## API Documentation

### Endpoints

- **GET /api/vms**
  - Description: Retrieve a list of all VMs.
  - Response: List of VMs with details.

- **POST /api/vms**
  - Description: Create a new VM.
  - Body:
    ```json
    {
      "name": "string",
      "type": "string",
      "settings": "object"
    }
    ```
  - Response: Details of the created VM.

- **GET /api/vms/{id}**
  - Description: Retrieve detailed information about a specific VM.
  - Response: Detailed info about the VM.

- **PUT /api/vms/{id}**
  - Description: Update an existing VM.
  - Body:
    ```json
    {
      "settings": "object"
    }
    ```
  - Response: Updated details of the VM.

- **DELETE /api/vms/{id}**
  - Description: Delete a VM.
  - Response: Confirmation of deletion.

## License
This project is licensed under the MIT License.